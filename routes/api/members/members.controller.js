const Members = require('../../../models/members')


// Create New List
exports.addMember = (req, res) => {

  let member = new Members(req.body)
  member.save().then(data => {
    res.status(200).json({ status: true, message: "member Saved", data })

  }).catch(error => {
    res.status(400).json({ status: false, message: error })

  })
}

//Delete a list
exports.removeMember = (req, res) => {
  // console.log(req.params.id)
  console.log(req.params.id, 'Id')
  Members.findByIdAndRemove(req.params.id).
    then(data => {
      res.status(200).json({ status: true, message: "Note Removed", data })

    }).catch(error => {
      res.status(200).json({ status: false, message: error })

    })
}

//Show all 
exports.showAll = (req, res) => {

  Members.find({}).
    then(data => {
      res.status(200).json({ status: true, message: "member fetched", data })

    }).catch(error => {
      res.status(200).json({ status: false, message: error })

    })
}

//fetch for one user
exports.viewSpecific = (req, res) => {

  Members.find({ userId: req.params.id }).
    then(data => {
      res.status(200).json({ status: true, message: "member fetched", data })

    }).catch(error => {
      res.status(200).json({ status: false, message: error })

    })
}

exports.updateMember = (req, res) => {

  Members.findByIdAndUpdate(req.params.id, req.body, { new: true }).
    then(data => {
      res.status(200).json({ status: true, message: "Members updated", data })

    }).catch(error => {
      res.status(400).json({ status: false, message: error })

    })
}