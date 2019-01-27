class Util {
    static query(query, populate, sort, select) {
        if (populate) query.populate(populate);
        if (sort) query.sort(sort);
        if (select) query.select(select);
    }
}

class Repository {
    constructor($model) {
        this.model = global.db[$model];
    }

    create(record) {
        const customModel = new this.model(record);
        return customModel.save();
    }

    update(id, record) {
        return this.model.update({ _id: id }, { $set: record });
    }

    find(conditions, populate, sort, select) {
        const query = this.model.findOne(conditions);
        Util.query(query, populate, sort, select);
        return query.exec();
    }

    findAll(conditions, populate, sort, select) {
        const query = this.model.findOne(conditions);
        Util.query(query, populate, sort, select);
        return query.exec();
    }

    remove(id) {
        return this.model.deleteOne({ _id: id });
    }
}

module.exports = Repository;