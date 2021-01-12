// Royal family tree

const childOf = function() {
    return this.parents.map(parent => {
        return parent.name
    }).join(' & ') || 'not known'
}

const diana = {
    name: 'Diana',
    parents: []
}

const queen = {
    name: 'Elizabeth',
    parents: []
}

const duke = {
    name: 'Philip',
    parents: [],
    childOf: childOf
}

const charles = {
    name: 'Charles',
    parents: [queen, duke],
    childOf: childOf
}

const camila = {
    name: 'Camila',
    parents: [],
    childOf: childOf
}

const william = {
    name: 'William',
    parents: [charles, diana],
    childOf: childOf
}

module.exports={diana, queen, duke, charles, camila, william}