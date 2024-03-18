import {Metadata} from "next"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import SupportResistance from "@/components/support/SupportResistance";

export const metadata: Metadata = {
    title: "Fae's Crypto", description: "Fae's Crypto",
}

export default function CryptoPage() {

    return (
        <Tabs defaultValue="supportResistance" className="h-full space-y-6">
            <div className="space-between flex items-center">
                <TabsList>
                    <TabsTrigger value="supportResistance" className="relative">
                        Support/Resistance
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent
                value="supportResistance"
                className="border-none p-0 outline-none"
            >
                <SupportResistance/>
            </TabsContent>
        </Tabs>)
}