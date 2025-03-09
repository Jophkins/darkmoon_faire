'use client';

import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

// const categories = ['Festival Attire', 'Fireworks & Lights', 'Talismans & Amulets', 'Food & Drinks', 'Toys & Pets', 'Magical Artifacts', 'Scrolls & Tomes of Knowledge', 'Festive Services'];
const cats = [
    {id: 1, name: 'Aces'},
    {id: 2, name: 'Clothing'},
    {id: 3, name: 'Talismans & Amulets'},
    {id: 4, name: 'Food & Drinks'},
    {id: 5, name: 'Toys & Pets'},
    {id: 6, name: 'Magical Artifacts'},
]

export const Categories: React.FC<Props> = ({className}) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({name, id}, index) => (
                    <a key={index}
                       href={`/#${name}`}
                       className={cn('flex, items-center font-bold rounded-2xl p-5', categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}>
                        <button className="cursor-pointer">
                            {name}
                        </button>
                    </a>
                ))
            }
        </div>
    );
};