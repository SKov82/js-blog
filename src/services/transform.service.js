export class TransformService {
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map(key => {
            const post = fbData[key]
            post.id = key
            return post
        })
    }
}