import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";

export default function Home() {
    return (
        <>
            <Container className="mt-8">
                <Title text="Cool stuff" size="lg"/>

            </Container>

            <TopBar/>

            <Container className="pb-14 mt-10">
                <div className="flex gap-[80px]">

                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {/*<ProductCard id={0} name="Darkmoon Card: Sandstorm" price={870} imageUrl="https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg" />*/}
                            <ProductsGroupList title="Aces" items={[
                                {
                                    "id": 1,
                                    "name": "Ace of Beasts",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 28,
                                    "items": [{"price": 28}]
                                },
                                {
                                    "id": 2,
                                    "name": "Ace of Portals",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 33,
                                    "items": [{"price": 33}]
                                },
                                {
                                    "id": 3,
                                    "name": "Ace of Wilds",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 49,
                                    "items": [{"price": 49}]
                                },
                                {
                                    "id": 4,
                                    "name": "Moonfire Lantern",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 15,
                                    "items": [{"price": 15}]
                                },
                                {
                                    "id": 5,
                                    "name": "Celestial Silk Robe",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 72,
                                    "items": [{"price": 72}]
                                },
                                {
                                    "id": 6,
                                    "name": "Lunar Festival Fireworks",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 10,
                                    "items": [{"price": 10}]
                                },
                                {
                                    "id": 7,
                                    "name": "Blessing of Elune",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 95,
                                    "items": [{"price": 95}]
                                },
                                {
                                    "id": 8,
                                    "name": "Moonstone Ring",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 44,
                                    "items": [{"price": 44}]
                                },
                                {
                                    "id": 9,
                                    "name": "Ancient Spirit Totem",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 60,
                                    "items": [{"price": 60}]
                                },
                                {
                                    "id": 10,
                                    "name": "Elder’s Wisdom Scroll",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 25,
                                    "items": [{"price": 25}]
                                },
                            ]} categoryId={1}/>
                            <ProductsGroupList title="Clothing" items={[{
                                "id": 11,
                                "name": "Nightbloom Elixir",
                                "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                "price": 18,
                                "items": [{"price": 18}]
                            },
                                {
                                    "id": 12,
                                    "name": "Spirit of the Ancestors",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 80,
                                    "items": [{"price": 80}]
                                },
                                {
                                    "id": 13,
                                    "name": "Mystic Lunar Amulet",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 55,
                                    "items": [{"price": 55}]
                                },
                                {
                                    "id": 14,
                                    "name": "Festival Guardian’s Cloak",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 37,
                                    "items": [{"price": 37}]
                                },
                                {
                                    "id": 15,
                                    "name": "Elune’s Grace Charm",
                                    "imageUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ticket_tarot_crusade.jpg",
                                    "price": 67,
                                    "items": [{"price": 67}]
                                }]} categoryId={2} />
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
}
