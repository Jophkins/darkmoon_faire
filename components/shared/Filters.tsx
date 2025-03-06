import {CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title} from "@/components/shared";
import {Input} from "@/components/ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text="Filter" size='sm' className='mb-5 font-bold'/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text='ready to enchant' value='1'/>
                <FilterCheckbox text='new stuff' value='2'/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price from to:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="500"
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[0, 1000]}
                />
            </div>

            <CheckboxFiltersGroup title='Title'
                                  className='mt-5'
                                  limit={6}
                                  defaultItems={[
                                      {
                                          text: 't1',
                                          value: '1',
                                      },
                                      {
                                          text: 't2',
                                          value: '2',
                                      },
                                      {
                                          text: 't3',
                                          value: '3',
                                      },
                                      {
                                          text: 't4',
                                          value: '4',
                                      },
                                      {
                                          text: 't5',
                                          value: '5',
                                      },
                                      {
                                          text: 't6',
                                          value: '6',
                                      },
                                      {
                                          text: 't7',
                                          value: '7',
                                      },
                                  ]}
                                  items={[
                                      {
                                          text: 't1',
                                          value: '1',
                                      },
                                      {
                                          text: 't2',
                                          value: '2',
                                      },
                                      {
                                          text: 't3',
                                          value: '3',
                                      },
                                      {
                                          text: 't4',
                                          value: '4',
                                      },
                                      {
                                          text: 't5',
                                          value: '5',
                                      },
                                      {
                                          text: 't6',
                                          value: '6',
                                      },
                                      {
                                          text: 't7',
                                          value: '7',
                                      },
                                  ]}
            />


        </div>
    );
};