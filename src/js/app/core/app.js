class App {
    constructor() {
        this.view = null;
        this.pollution = null;
    }

    init(View) {
        $(() => {
            this.view = new View();
        });
    }
};

export default new App();
