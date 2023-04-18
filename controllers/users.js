import getFilteredUsers from '../utils.js'

const getUsers = (req, res) => {
    const {fullnameSearch, minAge, maxAge, type, limit} = req.query
    const filteredUsers = getFilteredUsers(fullnameSearch, minAge, maxAge, type, limit)
    
    if (filteredUsers.length) 
        res.json(filteredUsers)
    else 
        res.status(400).json({success: false, message: 'User data is missing or does not match the search and filter criteria'})
}

export default getUsers