// Royal family tree

const childOf = function() {
    return this.parents.map(parent => {
        return parent.name
    }).join(' & ') || 'not known'
}

const queen = {
    name: 'Elizabeth',
    parents: [],
}

const duke = {
    name: 'philip',
    parents: [],
    childOf: childOf
}

const charles = {
    name: 'philip',
    parents: [queen, duke],
    childOf: childOf
}

const camila = {
    name: 'camila',
    parents: [],
    childOf: childOf
}

const william = {
    name: 'william',
    parents: [charles],
    childOf: childOf
}