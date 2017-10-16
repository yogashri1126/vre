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

            },


            state: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },

            // Alabama: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },

            // Alaska: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Arizona: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Arkansas: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // California: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Colorado: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Connecticut: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Delaware: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Florida: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Georgia: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Hawaii: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Idaho: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Illinois: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Indiana: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Iowa: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Kansas: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Kentucky: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Louisiana: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Maine: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Maryland: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Massachusetts: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Michigan: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Minnesota: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Mississippi: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Missouri: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Montana: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Nebraska: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Nevada: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // New_Hampshire: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // New_Jersey: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // New_Mexico: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // New_York: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // North_Carolina: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // North_Dakota: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Ohio: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Oklahoma: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Oregon: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Pennsylvania: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Rhode_Island: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // South_Carolina: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // South_Dakota: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Tennessee: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Texas: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Utah: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Vermont: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Virginia: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Washington: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // West_Virginia: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Wisconsin: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },
            // Wyoming: {
            //     type: DataTypes.BOOLEAN,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     defaultValue: false
            //         // validate: {
            //         //     len: [1, 140]
            // },

            zip: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },

            // coord: {
            //     type: DataTypes.STRING,
            //     // defaultValue is a flag that defaults a new todos complete value to false if
            //     // it isn't supplied one
            //     allowNull: true
            //         // validate: {
            //         //     len: [1, 140]
            // },
            emerg: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },
            relationship: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },
            ePhone: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },
            travel: {
                type: DataTypes.STRING,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                allowNull: false
                    // validate: {
                    //     len: [1, 140]
            },
            jan: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            feb: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            march: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            april: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            may: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            june: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            july: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            aug: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            sept: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            oct: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            nov: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            dec: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            chainsaw: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            ropeRescue: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            comPumperTruck: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },

            backhoe: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            veteran: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            ert: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            nurse: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            doc: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            veterinarian: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            vetTech: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            animTAB: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },
            comDriver: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            },

            modalNote: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
                    // validate: {
                    //     len: [1, 140]
            }


        },

        {
            freezeTableName: true
        });

   return Vol;

};
