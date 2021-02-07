export class Form {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls
    }

    getValue() {
        const value ={}

        Object.keys(this.controls).forEach(key => {
            value[key] = this.form[key].value
        })

        return value
    }

    clearForm() {
        Object.keys(this.controls).forEach(key => {
            this.form[key].value = ''
        })
    }

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach(key => {
            const validators = this.controls[key]

            let isValid = true
            validators.forEach(validator => {
                isValid = validator(this.form[key].value) && isValid
            })

            isValid ? clearError(this.form[key]) : setError(this.form[key])

            isFormValid = isFormValid && isValid
        })

        return isFormValid
    }
}

function setError($control) {
    clearError($control)
    const error = '<p class="validation-error">Введено некорректное значение</p>'
    $control.classList.add('invalid')
    $control.insertAdjacentHTML('afterend', error)
}

function clearError($control) {
    $control.classList.remove('invalid')
    if ($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling)
    }
}