export function renderPost(post, isButton = true) {
    const [tag, tagColor] = post.type === 'note'
        ? ['Заметка', '']
        : ['Новость', 'tag-blue']

    const button = (JSON.parse(localStorage.getItem('favorites')) || []).filter(item => item.id === post.id).length
        ? `<button class="button-round button-small button-danger" data-id=${post.id}>Удалить</button>`
        : `<button class="button-round button-small button-primary" data-id=${post.id}>Сохранить</button>`

    return `
        <div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              <li class="tag ${tagColor} tag-rounded">${tag}</li>
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date} ${post.time.slice(0,5)}</small>
            ${isButton ? button: ''}
          </div>
         </div>
        `
}