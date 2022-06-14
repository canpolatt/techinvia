import { default as data } from "../team.json";
import TeamMember from "../components/team_member";

const Team = () => {

  return (
    <section className="team--container">
        <h3>Our growing team</h3>
        <div className="team--wrapper">
            {data.map((item,idx)=> <TeamMember key={idx} {...item} />)}
        </div>
    </section>
  )
}

export default Team;