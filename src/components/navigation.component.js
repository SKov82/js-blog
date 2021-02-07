import {Component} from "../core/component"

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs = []
    }

   init() {
       this.$el
           .addEventListener('click', tabClickHandler.bind(this))
   }

   registerTabs(tabs) {
        this.tabs = tabs
   }
}

function tabClickHandler(event) {
    event.preventDefault();

    if (event.target.classList.contains('tab')) {
        this.$el
            .querySelectorAll('.tab')
            .forEach(el => {
                el.classList.remove('active')
            });

        event.target.classList.add('active');

        this.tabs.forEach(tab => tab.component.hide());
        const activeTab = this.tabs.find(tab => tab.name === event.target.dataset.name);
        activeTab.component.show()
    }
}