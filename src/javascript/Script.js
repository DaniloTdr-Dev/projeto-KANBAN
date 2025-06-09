// document.addEventListener('DOMContentLoaded', () => {
//     const items = document.querySelectorAll('.kanban-card');
//     let draggedItem = null;

//     items.forEach(item => {
//         item.addEventListener('dragstart', () => {
//             draggedItem = item;
//             item.classList.add('dragging');
//         });

//         item.addEventListener('dragend', () => {
//             item.classList.remove('dragging');
//             document.querySelectorAll('.cards-hover').forEach(el => el.classList.remove('cards-hover'));
//         });

//         item.addEventListener('dragover', e => {
//             e.preventDefault();
//             e.currentTarget.classlist.add('cards-hover');
//         })

//         item.addEventListener('drop', () => {
//             item.addEventListener('drop', e => {
//             e.currentTarget.remove('cards-hover');
//         })
//     })
// })})







// document.querySelectorAll('.kanban-card').forEach(card => {
//     card.addEventListener('dragstart', (e) => {
//         e.currentTarget.classlist.add('dragging');
//     })

//     card.addEventListener('dragend', (e) => {
//         e.currentTarget.classlist.remove('dragging');
//     })
// })

// document.querySelectorAll('.kanban-cards').forEach(column => {
//     column.addEventListener('dragover', e => {
//         e.preventDefault();
//         e.currentTarget.classlist.add('cards-hover');
//     })
      
//     column.addEventListener('dragleave', e => {
//         e.currentTarget.classlist.remove('cards-hover');
//     })

//     column.addEventListener('drop', e => {
//         e.currentTarget.remove('cards-hover');

//         const dragCard = document.querySelector('.kanban-card.dragging');
//         e.currentTarget.appendChild(dragCard)
//     })
// })