/*
    JS
*/

const teamMembers = [
    {
        image : 'img/wayne-barnett-founder-ceo.jpg',
        name : 'Wayne Bernett',
        role : 'Founder & CEO'
    },
    {
        image : 'img/angela-caroll-chief-editor.jpg',
        name : 'Angela Caroll',
        role : 'Chief Editor'
    },
    {
        image : 'img/walter-gordon-office-manager.jpg',
        name : 'Walter Gordon',
        role : 'Office Manager'
    },
    {
        image : 'img/angela-lopez-social-media-manager.jpg',
        name : 'Angela Lopez',
        role : 'Social Media Manager',
    },
    {
        image : 'img/scott-estrada-developer.jpg',
        name : 'Scott Estrada',
        role : 'Developer'
    },
    {
        image : 'img/barbara-ramos-graphic-designer.jpg',
        name : 'Barbara Ramos',
        role : 'Graphic Designer'
    }
];


for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log('member', member, typeof member);
    const card = document.createElement('div');
    card.classList.add('col-auto', 'mb-3', 'row', 'card', 'm-3', 'text-bg-dark');
    const cardContainer = document.getElementById('card-container');
    
    cardContainer.append(card);
    
    for (const key in member) {
        console.log('key', key, typeof key);
        console.log('member[key]',member[key], typeof member[key]);
        const cardRow = document.createElement('div');
        cardRow.classList.add('col-12', 'text-center', 'card-body');
        cardRow.append(member[key]);
        card.append(cardRow);

        if( key == 'image'){
            cardRow.innerHTML = '';
            const imgCont = document.createElement('img');
            imgCont.src = member[key];
            console.log('IMG SRC', imgCont);
            cardRow.classList.remove('card-body');
            imgCont.classList.add('card-img-top', 'mt-2');
            cardRow.append(imgCont);
            
        }
    }

    console.log('--------------------------------');
    
}

