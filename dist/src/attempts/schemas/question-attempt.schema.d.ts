import { Document, Types } from 'mongoose';
export type QuestionAttemptDocument = QuestionAttempt & Document;
export declare class QuestionAttempt {
    attemptId: Types.ObjectId;
    questionId: Types.ObjectId;
    studentAnswer: string;
    isCorrect: boolean;
    attemptsCount: number;
    timeTakenSeconds: number;
    timeBeforeFirstAttempt: number;
    hintsUsed: number;
    hintSequence: number[];
    timeSpentOnHints: number;
    viewedMicroLearning: boolean;
    microLearningViewedBefore: boolean;
    microLearningTimeSpent: number;
    answeredOnFirstAttempt: boolean;
    usedNoHints: boolean;
    showedPersistence: boolean;
    studyMaterialDownloaded: boolean;
    downloadedAt: Date;
    retriesAfterStudy: number;
    mustStudyBeforeRetry: boolean;
}
export declare const QuestionAttemptSchema: import("mongoose").Schema<QuestionAttempt, import("mongoose").Model<QuestionAttempt, any, any, any, (Document<unknown, any, QuestionAttempt, any, import("mongoose").DefaultSchemaOptions> & QuestionAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, QuestionAttempt, any, import("mongoose").DefaultSchemaOptions> & QuestionAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, QuestionAttempt>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    attemptId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    questionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentAnswer?: import("mongoose").SchemaDefinitionProperty<string, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isCorrect?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    attemptsCount?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timeTakenSeconds?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timeBeforeFirstAttempt?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hintsUsed?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hintSequence?: import("mongoose").SchemaDefinitionProperty<number[], QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timeSpentOnHints?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    viewedMicroLearning?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    microLearningViewedBefore?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    microLearningTimeSpent?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    answeredOnFirstAttempt?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    usedNoHints?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    showedPersistence?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studyMaterialDownloaded?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    downloadedAt?: import("mongoose").SchemaDefinitionProperty<Date, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    retriesAfterStudy?: import("mongoose").SchemaDefinitionProperty<number, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mustStudyBeforeRetry?: import("mongoose").SchemaDefinitionProperty<boolean, QuestionAttempt, Document<unknown, {}, QuestionAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<QuestionAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, QuestionAttempt>;
