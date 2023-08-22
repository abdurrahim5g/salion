import Title from "../../../components/Title/Title";
import "./Team.css";

import team1 from "./team_images/1.jpg";
import team2 from "./team_images/2.jpg";
import team3 from "./team_images/3.jpg";
import team4 from "./team_images/4.jpg";
import teamBanner from "./team_images/team-banner.png";

const teamImages = [team1, team2, team3, team4];

const Team = () => {
  return (
    <section className="team-section pt-20 md:pt-28">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-end">
            <div className="team-content">
              <Title>Dedicate Out Team</Title>
              <p>
                There are many variations of passagees of Lorem ipsum the
                injected houour rendomised world.
              </p>
              <div className="team-images mt-8 pb-20 md:pb-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {teamImages.map((teamImg, index) => (
                    <img
                      src={teamImg}
                      alt={`Team ${index}`}
                      key={index}
                      className="rounded-lg shadow w-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="animate-img">
              <img
                src={teamBanner}
                alt="Team Banner"
                className="mx-auto w-2/3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
