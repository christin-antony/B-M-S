import { bankSchema } from "../model/add.js";
export const bankFrom = (req, res) => {
    res.send('bank details')
}
export const bankdata = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const contact = req.body.contact;
    const gender = req.body.gender;
    const address = req.body.address;
    
    const newbank = new bankSchema({
        name: name,
        age: age,
        email: email,
        contact: contact,
        gender: gender,
        address: address


    });

    newbank.save({ "data": newbank })
        .then(() => {
            console.log("New bank Data Saved Successfully");
            res.json({ message: "New bank Data Saved Successfully" });
        })
        .catch((error) => {
            console.error("Error saving the new bank details: ", error);
            res.status(500).send("Error Saving Data: " + error.message);
        })
};

export const page1 = (req, res) => {
    res.send("hello")
}

export const bankget = async (req, res) => {
    try {
        const bank = await bankSchema.find();
        res.json(bank)
    }
    catch (error) {
        console.log(console.log(error))

    }
}

export const deletedata = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await bankSchema.findByIdAndDelete(id);
        console.log('Result:', result);
        if (result) {
            res.send('success');
        } else {
            console.log('User not found');
            res.send('User not found');
        }
    } catch (error) {
        console.error('Error:', error);
        res.send('Error deleting user');
    }
};

export const editdata = async (req, res) => {
    try {
        const emp = await bankSchema.findById(req.params.id);
        if (!emp) {
            return res.status(404).send('User not found');
        }
        res.json(emp)
    } catch (err) {
        console.log(err);
        res.send('Server error');
    }
}

export const updatedata = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email, contact, gender, address } = req.body;
        const updatbank = await bankSchema.findByIdAndUpdate(id, { name, age, email, contact, gender, address }, { new: true });
        if (!updatbank) {
            return res.send('User not found');
        }
        res.status(200).json(updatbank);
    } catch (err) {
        console.log(err);
        res.send('Server error');
    }
}
