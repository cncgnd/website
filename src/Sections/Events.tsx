import { HoverEffect } from "@/components/ui/card-hover-effect";

export const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-full">
      <div>
        <h2
          className="text-white text-3xl font-bold mb-4 text-center mt-2"
          id="events"
        >
          Our Events
        </h2>
        <div className="flex justify-center items-center p-5">
          <HoverEffect
            items={[
              {
                title: "Meetup",
                description: "Hackaccino",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-hackaccino/",
                imageurl: "./hackaccino poster(2).jpg",
              },
              {
                title: "Meetup",
                description: "Color the Clouds - Holi Edition",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-color-the-clouds-holi-edition/",
                imageurl: "./color clouds meetuo main.jpg",
              },
              {
                title: "Meetup",
                description: "Grafana and Friends Delhi Meetup",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-grafana-and-friends-delhi-meetup/",
                imageurl: "./grafana and friends delhi.jpg",
              },
              {
                title: "Meetup",
                description: "Meetnetes",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-meetnetes/",
                imageurl: "./1-1ratio.jpg",
              },
              {
                title: "Meetup",
                description: "Offline Meetup",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-offline-meetup/",
                imageurl: "./WhatsApp Image 2023-12-12 at 7.02.19 PM.jpg",
              },
              {
                title: "Meetup",
                description: "BadalCon 2023",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-badalcon-2023/",
                imageurl: "./badalcon announce.jpg",
              },
              {
                title: "Meetup",
                description: "Kloud Karnival",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-kloud-karnival/",
                imageurl: "./Bevy poster.jpg",
              },
              {
                title: "Online Event",
                description:
                  "Cloud Native Connect: Unleashing the power of CNCF",
                link: "https://community.cncf.io/events/details/cncf-new-delhi-presents-cloud-native-connect-unleashing-the-power-of-cncf/",
                imageurl: "./EVENT thumbnail.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
