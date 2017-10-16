module.exports = function(sequelize, DataTypes) {
    var ResQ = sequelize.define("ResQ", {

            first_name: {
                type: DataTypes.STRING,
                // AllowNull is a flag that restricts a todo from being entered if it doesn't
                // have a text value
                allowNull: false,
                // len is a validation that checks that our todo is between 1 and 140 characters
                // validate: {
                //     len: [1, 140]
                // }
            },
            last_name: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false,
                // validate: {
                //     len: [1, 140]
                // }

            },

            email: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },

            password: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },

            phoneNumber: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
                    // }

            },

            address: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
                    // }

            },

            city: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
                    // }

            },


            state: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            }
            // coord: {
            //     type: DataTypes.STRING,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     allowNull: true
            //         // validate: {
            //         //     len: [1, 140]
            // }
        },

        {
            freezeTableName: true
        });

    return ResQ;
}
