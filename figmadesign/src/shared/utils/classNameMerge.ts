import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';


export default function classNameMerge(inputs: any) {
return twMerge(clsx(inputs));
}