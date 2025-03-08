import Link from "next/link";
import {Title} from "@/components/shared/";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({id, name, price, imageUrl, className}) => {
    return (
        <div className={className}>
            <Link href={`/products/${id}`} passHref>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name}/>
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                <p>
                    Chance on spells and attacks to summon a sandstorm that circles you, dealing 50 to 100 Nature damage to targets it passes through.
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        <b>{price}</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1" />
                        Add
                    </Button>

                </div>

            </Link>
        </div>
    );
};