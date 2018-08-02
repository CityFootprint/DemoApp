class App {
    constructor() {
        this.view = null;
        this.pollution = null;
    }

    init(View) {
        $(() => {
            this.view = new View();
        });

        $(".pollution").on( "click", (ev) => {
            $(".pollution").toggleClass("enable");
            this.view.togglePollution();
        });
    }
};

export default new App();
