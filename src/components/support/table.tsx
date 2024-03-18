import React from "react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import TradingViewWidget from "@/components/support/TradingViewWidget";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import BigNumber from "bignumber.js";

export default function SRTable({
                                    symbol, period, strongResistance, weakResistance, strongSupport, weakSupport
                                }: {
    symbol: string;
    period: string;
    strongResistance: BigNumber[];
    weakResistance: BigNumber[];
    strongSupport: BigNumber[];
    weakSupport: BigNumber[];
}) {

    return (<>
        <Accordion type="multiple" defaultValue={['sr-tables']}>
            <AccordionItem value="tw-chart">
                <AccordionTrigger>TradingView Chart</AccordionTrigger>
                <AccordionContent>
                    <TradingViewWidget symbol={symbol}/>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sr-tables">
                <AccordionTrigger>SR Tables</AccordionTrigger>
                <AccordionContent>
                    <h1 className="text-center mb-5">SR Table for {symbol} - {period}</h1>
                    <div className="flex justify-between">
                        <div>
                            <Table style={{minWidth:200}}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center w-[100px]">Strong Resistance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {strongResistance.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="text-center">{item.toNumber()}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>

                        </div>
                        <div>
                            <Table style={{minWidth:200}}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center w-[100px]">Weak Resistance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {weakResistance.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="text-center">{item.toNumber()}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <Table style={{minWidth:200}}>
                                <TableCaption></TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center w-[100px]">Strong Support</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {strongSupport.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="text-center">{item.toNumber()}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>

                        </div>
                        <div>
                            <Table style={{minWidth:200}}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center w-[100px]">Weak Support</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {weakSupport.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="text-center">{item.toNumber()}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>


    </>);
}