/*
    JS
*/

const teamMembers = [
    {
       name : 'Wayne Bernett',
       role : 'Founder & CEO',
       image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : '../img/angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : '../img/walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : '../img/angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'img/scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : '../img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log('member', member, typeof member);
    const card = document.createElement('div');
    card.classList.add('col-4', 'mb-3');
    const cardContainer = document.getElementById('card-container');
    
    cardContainer.append(card);
    
    for (const key in member) {
        console.log(key, member[key]);
        card.append(member[key]);
    }

    console.log('--------------------------------');
    
}