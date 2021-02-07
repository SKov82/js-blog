class ApiService {
    constructor(url) {
        this.url = url
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + 'posts.json', {
                method: 'POST',
                body: JSON.stringify(post)
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(this.url + 'posts.json', {
                method: 'GET'  // GET можно и не указывать - идет по-умолчанию
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(this.url + `posts/${id}.json`, {
                method: 'GET'  // GET можно и не указывать - идет по-умолчанию
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }
}

export const apiService = new ApiService('https://vmc-blog-default-rtdb.firebaseio.com/')