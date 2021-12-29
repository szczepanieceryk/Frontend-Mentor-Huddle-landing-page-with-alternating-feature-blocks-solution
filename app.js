// component and content fields
const component = document.querySelectorAll('.component');
const componentImage = document.querySelectorAll('.component-img')
const componentTitle = document.querySelectorAll('.component-title')
const componentText = document.querySelectorAll('.component-text')

// content for main section components
const mainContent = [
    {
        image: './images/illustration-grow-together.svg',
        title: 'Grow Together',
        text: 'Generate meaningful discussions with your audience and build a strong, loyal community.Think of the insightful conversations you miss out on with a feedback form.'
    },
    {
        image: './images/illustration-flowing-conversation.svg',
        title: 'Flowing Conversations',
        text: "You wouldn't paginate a conversation in real life, so why do it online? Our threadhave just-in-time loading for a more natural flow."
    },
    {
        image: './images/illustration-your-users.svg',
        title: 'Your Users',
        text: "It takes no time at all to integrate Huddle with your app's authentication solution.This means, once signed in to your app, your users can start chatting immediately."
    },
]

// make a loop on every element (object) of an Array
mainContent.forEach(() => {
    for (let i = 0; i < mainContent.length; i++) {
        componentImage[i].src = mainContent[i].image;
        componentTitle[i].innerText = mainContent[i].title;
        componentText[i].innerText = mainContent[i].text;
    }
})