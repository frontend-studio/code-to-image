"use client";

import Link from "next/link";
import React from "react";
import {Github} from "lucide-react";

function Footer() {
    return (
        <div className="flex items-center gap-10 py-16">
            <Link
                target='_blank'
                href="https://sakilahmed.vercel.app/"
                className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
            >
                <span className="pr-2">Made by</span>
                <span className="pl-1 font-medium text-slate-200">MD SAKIL AHMED</span>
            </Link>
            <Link
                target='_blank'
                href="https://github.com/sakil-ahmed"
                className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
            >
                <Github/>
            </Link>
        </div>
    );
}

export default Footer;
