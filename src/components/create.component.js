import {Component} from '../core/component'
import {Form} from '../core/form'
import {Validator} from '../core/validator';
import {apiService} from '../services/api.service';

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, {
            title: [Validator.required],
            fulltext: [Validator.required, Validator.minLen(10)]
        })
    }
}

async function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            ...this.form.getValue()
        }

        await apiService.createPost(formData)

        this.form.clearForm()
    }
}