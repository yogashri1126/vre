module.exports = function(sequelize, DataTypes) {
    var Vol = sequelize.define("Vol", {
            first_name: {
                type: DataTypes.STRING,
                // AllowNull is a flag that restricts a todo from being entered if it doesn't
                // have a text value
                allowNull: false,
                // len is a validation that checks that our todo is between 1 and 140 characters
                validate: {
                    len: [1, 140]
                }
            },
            last_name: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false,
                validate: {
                    len: [1, 140]
                }

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

            }

        },

        {
            freezeTableName: true
        });

    return Vol;

    //   var ResQ = sequelize.define("ResQ", {

    //     //these will cover the sign in parameters
    //   text: {
    //     type: DataTypes.STRING,
    //     // AllowNull is a flag that restricts a todo from being entered if it doesn't
    //     // have a text value
    //     allowNull: false,
    //     // len is a validation that checks that our todo is between 1 and 140 characters
    //     validate: {
    //       len: [1, 140]
    //     }
    //   },
    //   complete: {
    //     type: DataTypes.BOOLEAN,
    //     // defaultValue is a flag that defaults a new todos complete value to false if
    //     // it isn't supplied one
    //     defaultValue: false
    //   }
    // });
    // return ResQ;
};