import users from './users/data.js'

const getFilteredUsers = (fullnameSearch, minAge, maxAge, type, limit) => {
    return users.filter((user) => {
        if (fullnameSearch && !user.fullName.startsWith(fullnameSearch)) 
            return false
        if (minAge && user.age < minAge)
            return false
        if (maxAge && user.age > maxAge)
            return false
        if (type && user.type !== type)
            return false
        return true
    }).slice(0, limit)
}

export default getFilteredUsers