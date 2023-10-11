const express = require("express");
const Contact = require("../models/contactModel")
const asyncHander = require("express-async-handler");
const router = express.Router();
// get all contacts
// Get  /contacts
// public
const getContact = asyncHander(async(req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
// create new contact
// post /contacts
// public 
const createContact = asyncHander(async (req,res) => {
    console.log("the request is ",req.body);
    const {name,email,phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});
// update contact
// put /contacts/id
// public
const updateContact = asyncHander((req,res) => {
    res.status(200).json({message:`update Contacts ${req.params.id}`});
});
// delete contact 
// delete /contacts/id
// public
const deleteContact = asyncHander((req,res) => {
    res.status(200).json({message:`delete Contacts ${req.params.id}`});
});
// get contact
// get /contacts/id
// public
const getSingleContacts = asyncHander((req,res) => {
    res.status(200).json({message:`get single Contacts ${req.params.id}`});
});
module.exports = {getContact,createContact,updateContact,deleteContact,getSingleContacts
};