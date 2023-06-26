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
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : '../img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log('member', member, typeof member);
    
    for (const key in member) {
        console.log(key, member[key]);
    }

    console.log('--------------------------------');
    
}