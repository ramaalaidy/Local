// اختيار العناصر
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const deleteButton = document.getElementById("deleteAll");
const taskList = document.getElementById("taskList");

// إضافة مهمة جديدة
function addTask() {
    const taskText = taskInput.value.trim();

    // التحقق من وجود نص المدخل
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // إنشاء عنصر جديد
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // زر إكمال المهمة
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => toggleComplete(taskSpan);

    // زر حذف المهمة
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => listItem.remove();

    // إضافة العناصر إلى قائمة المهام
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // إعادة تعيين المدخل
    taskInput.value = "";
}

// تبديل حالة الإكمال
function toggleComplete(taskSpan) {
    taskSpan.classList.toggle("completed");
}

// إضافة المهمة عند الضغط على الزر
addTaskButton.onclick = addTask;

// إضافة المهمة عند الضغط على Enter
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});





















