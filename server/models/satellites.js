
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SatelliteSchema = new Schema({
    'spaceTrack': {
        'CCSDS_OMM_VERS': {
            'type': String,
            'default': null
        },
        'COMMENT': {
            'type': String,
            'default': null
        },
        'CREATION_DATE': {
            'type': Date,
            'default': null
        },
        'ORIGINATOR': {
            'type': String,
            'default': null
        },
        'OBJECT_NAME': {
            'type': String,
            'default': null
        },
        'OBJECT_ID': {
            'type': String,
            'default': null
        },
        'CENTER_NAME': {
            'type': String,
            'default': null
        },
        'REF_FRAME': {
            'type': String,
            'default': null
        },
        'TIME_SYSTEM': {
            'type': String,
            'default': null
        },
        'MEAN_ELEMENT_THEORY': {
            'type': String,
            'default': null
        },
        'EPOCH': {
            'type': Date,
            'default': null
        },
        'MEAN_MOTION': {
            'type': Number,
            'default': null
        },
        'ECCENTRICITY': {
            'type': Number,
            'default': null
        },
        'INCLINATION': {
            'type': Number,
            'default': null
        },
        'RA_OF_ASC_NODE': {
            'type': Number,
            'default': null
        },
        'ARG_OF_PERICENTER': {
            'type': Number,
            'default': null
        },
        'MEAN_ANOMALY': {
            'type': Number,
            'default': null
        },
        'EPHEMERIS_TYPE': {
            'type': Number,
            'default': null
        },
        'CLASSIFICATION_TYPE': {
            'type': String,
            'default': null
        },
        'NORAD_CAT_ID': {
            'type': Number,
            'default': null
        },
        'ELEMENT_SET_NO': {
            'type': Number,
            'default': null
        },
        'REV_AT_EPOCH': {
            'type': Number,
            'default': null
        },
        'BSTAR': {
            'type': Number,
            'default': null
        },
        'MEAN_MOTION_DOT': {
            'type': Number,
            'default': null
        },
        'MEAN_MOTION_DDOT': {
            'type': Number,
            'default': null
        },
        'SEMIMAJOR_AXIS': {
            'type': Number,
            'default': null
        },
        'PERIOD': {
            'type': Number,
            'default': null
        },
        'APOAPSIS': {
            'type': Number,
            'default': null
        },
        'PERIAPSIS': {
            'type': Number,
            'default': null
        },
        'OBJECT_TYPE': {
            'type': String,
            'default': null
        },
        'RCS_SIZE': {
            'type': String,
            'default': null
        },
        'COUNTRY_CODE': {
            'type': String,
            'default': null
        },
        'LAUNCH_DATE': {
            'type': Date,
            'default': null
        },
        'SITE': {
            'type': String,
            'default': null
        },
        'DECAY_DATE': {
            'type': Date,
            'default': null
        },
        'DECAYED': {
            'type': Number,
            'default': null
        },
        'FILE': {
            'type': Number,
            'default': null
        },
        'GP_ID': {
            'type': Number,
            'default': null
        },
        'TLE_LINE0': {
            'type': Number,
            'default': null
        },
        'TLE_LINE1': {
            'type': Number,
            'default': null
        },
        'TLE_LINE2': {
            'type': Number,
            'default': null
        }
    },
    'launch': {
        'type': String,
        'default': null
    },
    'version': {
        'type': String,
        'default': null
    },
    'height_km': {
        'type': Number,
        'default': null
    },
    'latitude': {
        'type': Number,
        'default': null
    },
    'longitude': {
        'type': Number,
        'default': null
    },
    'velocity_kms': {
        'type': Number,
        'default': null
    },
    'id': {
        'type': String,
        'default': null
    }
})

module.exports = mongoose.model('Satellite', SatelliteSchema);