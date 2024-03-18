import React from "react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import TradingViewWidget from "@/components/support/TradingViewWidget";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";


export default function SRTable({
                                    symbol, period, strongResistance, weakResistance, strongSupport, weakSupport
                                }: {
    symbol: string;
    period: string;
    strongResistance: number[];
    weakResistance: number[];
    strongSupport: number[];
    weakSupport: number[];
}) {

    return (<>
        <Accordion type="single" collapsible>
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
                            <h1 className="mb-3">Strong Resistance</h1>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {strongResistance.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="align-center">{item}</TableCell>
                                        </TableRow>)
                                    })}

                                </TableBody>
                            </Table>

                        </div>
                        <div>
                            <h1 className="mb-3">Weak Resistance</h1>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">weakResistance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {weakResistance.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="align-center">{item}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <h1 className="mb-3">strongSupport</h1>
                            <Table>
                                <TableCaption></TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {strongSupport.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="align-center">{item}</TableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>

                        </div>
                        <div>
                            <h1 className="mb-3">weakSupport</h1>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">weakSupport</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {weakSupport.map((item: any) => {
                                        return (<TableRow key={item}>
                                            <TableCell className="align-center">{item}</TableCell>
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