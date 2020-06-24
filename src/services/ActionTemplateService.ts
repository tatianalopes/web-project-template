/**
 * This is a Service template class
 * This class is used to abstract the business logic of the application from the routes
 * Each resource's operation must have a separated service class
 */

import Template from '../models/Template';
import TemplatesRepository from '../repositories/TemplatesRepository';

class ActionTemplateService {
    private templatesRepository: TemplatesRepository;

    // all external dependecies must be passed to the service in its constructor
    constructor(templatesRepository: TemplatesRepository) {
        this.templatesRepository = templatesRepository;
    }

    // a service must have only one method, called executor
    public execute() {}
}

export default ActionTemplateService;
