import { Document, Types } from 'mongoose';
export type TestAttemptDocument = TestAttempt & Document;
export declare class TestAttempt {
    testId: Types.ObjectId;
    studentId: Types.ObjectId;
    startedAt: Date;
    completedAt: Date;
    status: string;
    basicScore: number;
    aiScore: number;
    aiScoreBreakdown: any;
    totalQuestions: number;
    correctAnswers: number;
    hintsUsed: number;
    timeTakenSeconds: number;
    learningEngagementRate: number;
    averageTimePerQuestion: number;
    firstAttemptSuccessRate: number;
    hintDependencyRate: number;
    persistenceScore: number;
    confidenceIndicator: number;
    forcedStudyBreaks: number;
    masteryAchieved: boolean;
    questionsRequiringStudy: number;
}
export declare const TestAttemptSchema: import("mongoose").Schema<TestAttempt, import("mongoose").Model<TestAttempt, any, any, any, (Document<unknown, any, TestAttempt, any, import("mongoose").DefaultSchemaOptions> & TestAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, TestAttempt, any, import("mongoose").DefaultSchemaOptions> & TestAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, TestAttempt>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TestAttempt, Document<unknown, {}, TestAttempt, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    testId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    studentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startedAt?: import("mongoose").SchemaDefinitionProperty<Date, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completedAt?: import("mongoose").SchemaDefinitionProperty<Date, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    basicScore?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    aiScore?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    aiScoreBreakdown?: import("mongoose").SchemaDefinitionProperty<any, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalQuestions?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    correctAnswers?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hintsUsed?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    timeTakenSeconds?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    learningEngagementRate?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageTimePerQuestion?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    firstAttemptSuccessRate?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hintDependencyRate?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    persistenceScore?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    confidenceIndicator?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    forcedStudyBreaks?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    masteryAchieved?: import("mongoose").SchemaDefinitionProperty<boolean, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    questionsRequiringStudy?: import("mongoose").SchemaDefinitionProperty<number, TestAttempt, Document<unknown, {}, TestAttempt, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TestAttempt & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TestAttempt>;
