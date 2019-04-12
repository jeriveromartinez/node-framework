class Util {
    /**
     * 
     * @param {Object} query 
     * @param {Object} populate 
     * @param {string} sort 
     * @param {string} select 
     */
    static query(query, populate, sort, select) {
        if (populate) query.populate(populate);
        if (sort) query.sort(sort);
        if (select) query.select(select);
    }
}

class Repository {
    /**
     * @param {string} $model Model name
     */
    constructor($model) {
        this.model = global.db[$model];
    }

    /**
     * 
     * @param {Object} record 
     */
    create(record) {
        const customModel = new this.model(record);
        return customModel.save();
    }

    /**
     * 
     * @param {string} id 
     * @param {Object} record 
     */
    update(id, record) {
        return this.model.update({ _id: id }, { $set: record });
    }

    /**
     * 
     * @param {Object} conditions 
     */
    count(conditions = {}) {
        return this.model.countDocuments(conditions).exec();
    }

    /**
     * 
     * @param {Object} conditions 
     * @param {string|Object} populate 
     * @param {string} sort 
     * @param {string} select 
     */
    find(conditions, populate, sort, select) {
        const query = this.model.findOne(conditions);
        Util.query(query, populate, sort, select);
        return query.exec();
    }

    /**
     * 
     * @param {Object} conditions 
     * @param {string|Object} populate 
     * @param {string} sort 
     * @param {string} select 
     */
    findAll(conditions = {}, populate, sort, select) {
        const query = this.model.findOne(conditions);
        Util.query(query, populate, sort, select);
        return query.exec();
    }

    /**
     * 
     * @param {string} id 
     */
    remove(id) {
        return this.model.deleteOne({ _id: id });
    }
}

module.exports = Repository;