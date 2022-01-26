import './me.scss';

const data = {
    id: 'me',
    name: 'Johnny Meza',
    profilePicture: {
        src: 'https://media-exp1.licdn.com/dms/image/C5603AQGefnomH7990w/profile-displayphoto-shrink_200_200/0/1553469143847?e=1648684800&v=beta&t=03pCZw8khrIdz82VpPAhfZbPdx0uMkdaGOhfiJyQms8',
        alt: 'Johnny Meza, in 2018'
    },
    yearsOfExperience: 4,
    title: 'Senior Front-End Developer',
    employer: 'LiveArea, a Merkle Company',
    location: 'Austin, TX'
};

class Me extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="${data.id}">
                <div class="profile-card">
                    <div class="profile-picture">
                        <img class="profile" src="${data.profilePicture.src}" alt="${data.profilePicture.alt}" />
                    </div>
                    <div class="profile-info">
                        <h2>${data.name}</h2>
                        <ul>
                            <li>- ${data.title}</li>
                            <li>- ${data.employer}</li>
                            <li>- ${data.yearsOfExperience} years of Experience</li>
                            <li>- ${data.location}</li>
                        </ul>
                    </div>
                </div>

                <recommendations-jmdev></recommendations-jmdev>
            </section>
        `;
    }
}

customElements.define('me-jmdev', Me);