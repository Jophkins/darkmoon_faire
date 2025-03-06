

import {Container, Filters, Title, TopBar} from "@/components/shared";

export default function Home() {
  return (
      <>
          <Container className="mt-8">
              <Title text="Cool stuff" size="lg" />

          </Container>

          <TopBar />

          <Container className="pb-14 mt-10">
              <div className="flex gap-[60px]">

                  <div className="w-[250px]">
                      <Filters />
                  </div>

                  <div className="flex-1">
                      <div className="flex flex-col gap-16">
                          items list
                      </div>
                  </div>

              </div>
          </Container>
      </>
  );
}
