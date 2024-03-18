"use client"

import {Separator} from "@/components/ui/separator";
import SearchForm, {FormSchema} from "@/components/support/form";
import {z} from "zod";
import {toast} from "@/components/ui/use-toast";
import SRTable from "@/components/support/table";
import {useState} from "react";
import {findSupportResistanceLevels, getBinancePriceData} from "@/components/support/api";

export default function SupportResistance() {
    const [symbol, setSymbol] = useState<string>("");
    const [period, setPeriod] = useState<string>("");

    const [strongSupport, setStrongSupport] = useState<number []>([]);
    const [weakSupport, setWeakSupport] = useState<number []>([]);
    const [strongResistance, setStrongResistance] = useState<number []>([]);
    const [weakResistance, setWeakResistance] = useState<number []>([]);

    async function handleSupportResistance(data: z.infer<typeof FormSchema>) {
        setSymbol(data.symbol);
        setPeriod(data.period);
        toast({
            title: "You submitted the following values:",
            description: (<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>),
        });
        await getBinancePriceData(data.symbol, data.period, 100).then((res: number []) => {
            res = res.sort((a, b) => a - b);

            const {
                strongSupport, weakSupport, strongResistance, weakResistance
            } = findSupportResistanceLevels(res, 10);
            setStrongResistance(strongResistance.sort((a, b) => a - b));
            setWeakResistance(weakResistance.sort((a, b) => a - b));
            setStrongSupport(strongSupport.sort((a, b) => a - b));
            setWeakSupport(weakSupport.sort((a, b) => a - b));
        });

    }

    return (<>
        <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
                Support/Resistance
            </h2>
            <p className="text-sm text-muted-foreground">
                S/R Finder is a powerful tool that helps you find support and resistance levels for any stock.
            </p>
        </div>
        <Separator className="my-4"/>

        <SearchForm
            handleSupportResistance={handleSupportResistance}
        />

        <Separator className="my-4"/>

        {(strongResistance.length > 0 || weakResistance.length > 0 || strongSupport.length > 0 || weakSupport.length > 0) &&
            <SRTable symbol={symbol} period={period}
                     strongResistance={strongResistance}
                     weakResistance={weakResistance}
                     strongSupport={strongSupport}
                     weakSupport={weakSupport}
            />}
    </>);
}