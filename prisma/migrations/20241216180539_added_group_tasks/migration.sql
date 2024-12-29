-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasksOnProfiles" (
    "taskId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "TasksOnProfiles_pkey" PRIMARY KEY ("taskId","profileId")
);

-- AddForeignKey
ALTER TABLE "TasksOnProfiles" ADD CONSTRAINT "TasksOnProfiles_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TasksOnProfiles" ADD CONSTRAINT "TasksOnProfiles_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
