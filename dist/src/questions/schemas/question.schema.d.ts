import { Document, Types } from 'mongoose';
export type QuestionDocument = Question & Document;
export declare class Question {
    testId: Types.ObjectId;
    questionText: string;
    correctAnswer: string;
    hints: string[];
    microLearning: string;
    order: number;
    maxAttemptsBeforeStudy: number;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any, any, (Document<unknown, any, Question, any, import("mongoose").DefaultSchemaOptions> & Question & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Question, any, import("mongoose").DefaultSchemaOptions> & Question & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Question>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Question, Document<unknown, {}, Question, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    testId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    questionText?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    correctAnswer?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hints?: import("mongoose").SchemaDefinitionProperty<string[], Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    microLearning?: import("mongoose").SchemaDefinitionProperty<string, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    maxAttemptsBeforeStudy?: import("mongoose").SchemaDefinitionProperty<number, Question, Document<unknown, {}, Question, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Question & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Question>;
