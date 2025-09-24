'use client';
import React from 'react';
import { Button } from 'antd';


type Props = {
title: string;
shortDescription?: string;
banner?: string;
meta?: { price?: string; duration?: string };
};


export default function CourseHero({ title, shortDescription, banner, meta }: Props) {
return (
<div className="w-full">
<div
className="w-full min-h-[280px] hero-bg flex items-center"
style={{
backgroundImage: `linear-gradient(90deg, rgba(6,21,34,0.75), rgba(6,21,34,0.2)), url('${banner}')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}
>
<div className="container mx-auto px-4 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2 text-white">
<h1 className="text-3xl md:text-5xl font-semibold leading-tight">{title}</h1>
{shortDescription && (
<p className="mt-4 text-sm md:text-base opacity-90">{shortDescription}</p>
)}


<div className="mt-6 flex flex-wrap gap-3">
<Button type="primary" size="large">
Enroll Now
</Button>
<Button size="large">Preview</Button>
</div>
</div>


<div className="md:col-span-1 text-white">
<div className="bg-white/10 p-4 rounded-lg">
<div className="text-2xl font-semibold">{meta?.price ?? 'Free'}</div>
<div className="text-sm mt-2">Duration: {meta?.duration ?? 'Self-paced'}</div>
<div className="mt-4">
<Button type="default">Buy Course</Button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}