import {Component} from '../core/component'
import {apiService} from '../services/api.service'
import {renderPost} from '../templates/post.template'

export class FavoriteComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', clickHandler.bind(this))
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites')),
              html = renderList(favorites)

        this.$el.innerHTML = html
    }
}

function renderList(list = []) {
    if (list.length) {
        return `
            <ul>
                ${list.map(i => `<li><a href="#" class="post-link" data-id=${i.id}>${i.title}</a></li>`).join('')}
            </ul>
        `
    }

    return `<p>Список избранного пуст</p>`
}

async function clickHandler(event) {
    event.preventDefault()
    if (event.target.classList.contains('post-link')) {
        const postId = event.target.dataset.id

        this.$el.innerHTML = ''
        this.loader.show()
        const post = await apiService.fetchPostById(postId)

        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, false))
        this.loader.hide()
    }
}