import React from 'react';
import  './style.scss'; 
import { ContentWrapper } from '..';

// Import team member images
import member1 from '../../assets/member.png';
import member2 from '../../assets/member_2.png';
import member3 from '../../assets/member_3.png';
import member4 from '../../assets/member_4.png';

/**
 * Interface for team member data
 */
interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    altText: string;
}

/**
 * OurTeam Component
 * 
 * Displays the team members section with photos and positions.
 * 
 * @returns {React.ReactElement} - The rendered team section
 */
const OurTeam: React.FC = () => {
    /**
     * Team members data
     */
    const TEAM_MEMBERS: TeamMember[] = [
        {
            id: 1,
            name: 'Adelle Smith',
            position: 'Chief Marketing Officer',
            image: member1,
            altText: 'Adelle Smith, Chief Marketing Officer'
        },
        {
            id: 2,
            name: 'Steffi Allysa',
            position: 'Chief Creative Officer',
            image: member2,
            altText: 'Steffi Allysa, Chief Creative Officer'
        },
        {
            id: 3,
            name: 'Jonathan Leon',
            position: 'Chief Talent Officer',
            image: member3,
            altText: 'Jonathan Leon, Chief Talent Officer'
        },
        {
            id: 4,
            name: 'Alleah Janette',
            position: 'Chief Marketing Officer',
            image: member4,
            altText: 'Alleah Janette, Chief Marketing Officer'
        }
    ];

    return (
        <section className="teamSection" aria-labelledby="team-heading">
            <ContentWrapper>
                {/* Team Header */}
                <div className="teamHeader">
                    <span>Our team</span>
                    <h1 id="team-heading">
                        Friendly Faces... and Experienced Hands
                    </h1>
                    <p>
                        We believe that effective treatment begins with understanding your problem...
                        and we are here to listen to you first
                    </p>
                </div>

                {/* Team Grid */}
                <div className="teamGrid ">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.id} className="teamMember">
                            <div className="memberImage">
                                <img
                                    src={member.image}
                                    alt={member.altText}
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                />
                            </div>
                            <div className="memberInfo ">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    );
};

export default OurTeam;