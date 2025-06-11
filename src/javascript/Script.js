document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-cards')
    let draggedItem = null;

    items.forEach(item => {
        item.addEventListener('dragstart', () => {
            item.classList.add('dragging');
            draggedItem = item;
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging'); 
        });

        item.addEventListener('dragover', e => {
            e.preventDefault();
            e.classlist.add('cards-hover');
        })

        item.addEventListener('drop', () => {
            item.addEventListener('drop', e => {
            e.classList.remove('cards-hover');
        })
    })

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.currentTarget.classList.add('cards-hover');
        });
        
        column.addEventListener('dragleave', (e) => {
            e.currentTarget.classList.remove('cards-hover'); 
        });

        column.addEventListener('drop', (e) => {
            e.currentTarget.classList.remove('cards-hover'); 

            const dragCard = document.querySelector('.kanban-card.dragging');
            e.currentTarget.appendChild(dragCard);
        })
    })
})})







// document.querySelectorAll('.kanban-card').forEach(card => {
//     card.addEventListener('dragstart', e => {
//         e.currentTarget.classlist.add('dragging');
//     })

//     card.addEventListener('dragend', e => {
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