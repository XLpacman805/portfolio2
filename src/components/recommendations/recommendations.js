import './recommendations.scss';
const app = document.querySelector('app-jmdev');

class Recommendations extends HTMLElement {
    constructor() {
        super();
        this.recommendationData = [
            {
                profilePicture: {
                    src: 'https://media-exp1.licdn.com/dms/image/C5603AQGWDO_LrHqsfg/profile-displayphoto-shrink_100_100/0/1516444567326?e=1648684800&v=beta&t=oFglE2hgTTD1yDpLo8GVZE1HnKg_l0A41c0hFH-KkdA',
                    alt: 'Larry Martin, ALM, MBA'
                },
                name: 'Larry Martin, ALM, MBA',
                title: 'Cloud Computing, Cyber Security, Project Management, PMP',
                recommendationText: 'Johnny and I worked together on 2 projects (MongoDB and neo4j) and I saw first-hand that he is not only sharp and thorough, but also patient and detail-oriented. Although I have worked in this industry for 16+ years, Johnny was definitely the stronger link.  I was impressed with how quickly he got up to speed on the project and how well he was able to deliver.  NoSQL and GraphQL can be complicated, but Johnny wrote detailed and accurate queries to return the data we needed.  At one point, we even had to include a bunch of regular expressions (we = Johnny doing, me observing). We submitted the project on-time and received rave reviews from the user base',
            },
            {
                profilePicture: {
                    src: 'https://media-exp1.licdn.com/dms/image/C5603AQFFnI6fitD5vA/profile-displayphoto-shrink_100_100/0/1560319989666?e=1648684800&v=beta&t=DHDZxJUZ1dswrDUAkujWNmEawPZWxqIP_IDDS3dgBDg',
                    alt: 'Connor Phillips'
                },
                name: 'Connor Phillips',
                title: 'Operations Analyst at King | Indie Game Designer | Ex-Google',
                recommendationText: 'Working with Johnny was an absolute pleasure. Being hired roughly around the same time, I was able to witness Johnny’s growth and determination to make a difference within the company. Only a year into his role, he continued to develop his soft/ hard skills to push himself to higher achievements and earn well deserved promotions. Johnny created innovative tools and technological advancements to streamline the work we were doing and add value to our projects. I can confidently say that any goal Johnny aims to achieve, he will push himself 1000% and exceed expectations. Johnny is a valuable asset to his peers and any company he works for now and in the future.'

            },
            {
                profilePicture: {
                    src: 'https://media-exp1.licdn.com/dms/image/C5603AQHidrQt9sfvuQ/profile-displayphoto-shrink_100_100/0/1633454323595?e=1648684800&v=beta&t=LGFIoOq7dfN9qYRcaa4ew6GBdWYzRNEp3PG8wfrJ2bc',
                    alt: 'Rodrigo  A. Cárdenas'
                },
                name: 'Rodrigo  A. Cárdenas',
                title: 'Project Manager/ Educator/ Entrepreneur',
                recommendationText: `It is an honor to recommend Mr. Meza.

                I have the very fortunate pleasure to know and to have worked with Mr. Johnny Meza for over two years now. In that period and through his actions, I know that he has profound core principles and values of community service around STEM education, specifically around software information technologies. 
                
                I worked alongside Johnny in a series of events called Hackathon by the Sea. These technology events brought hundreds of students and industry professionals together for a hands-on exploration of problem-solving with technology.
                
                During our work together, I’ve found Johnny to be communicative, tenacious, and a force multiplier for any team that has the privilege of working with him.
                
                Johnny is a pinch hitter. He can jump into whatever role is necessary to move the ball forward. He has tackled everything from leading Python workshops for local educators, to mentoring computer science students for 24 hours straight and every single time he has hit the mark.
                
                Without a doubt, I recommend Mr. Meza for any role that requires strong teamwork, hands-on leadership, and open communication. He is an asset to any organization. 
                
                If you’d like to speak more at length about my experience with Johnny, feel free to message me via LinkedIn.`

            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    createRecommendationsHTML() {
        return this.recommendationData.map(recommendation => {
            return `
                <div class="recommendation">
                    <div class="profile">
                        <img class="img-responsive" src="${recommendation.profilePicture.src}" alt="${recommendation.profilePicture.alt}">
                        <div class="profile-info">
                            <span class="name">${recommendation.name}</span>
                            <span class="title">${recommendation.title}</span>
                        </div>
                    </div>
                    <div class="content">
                        <p>${recommendation.recommendationText}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    render() {
        this.innerHTML = `
            <h2> Recommendations </h2>
            <div class="scrollbox">
                ${this.createRecommendationsHTML()}
            </div>

            <div class="linkedin-link">
                <a target="_blank" href="https://www.linkedin.com/in/johnny-meza-9641b8139/">View on LinkedIn</a>
            </div>
        `;
    }
}

customElements.define('recommendations-jmdev', Recommendations);