import { createServer } from "miragejs";
import testQuestions from './data/questions.json';
import personalityTraits from './data/personality-traits.json';

createServer({
    routes() {
        this.namespace = 'api';

        this.get("/get-questions", () => {
            return testQuestions;
        })

        this.get("/get-personality-trait", (schema, request) => {
            let result = Math.round(Math.random());
            return personalityTraits.data.find(el => parseInt(el.id) === result );
        })

    }
})