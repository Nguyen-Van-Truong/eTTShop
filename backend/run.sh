#!/bin/bash

# Hàm chờ người dùng nhấn phím để tiếp tục hoặc thoát
pause_on_error() {
    echo "Nhấn phím để tiếp tục hoặc Ctrl+C để thoát..."
    read -n 1 -s
}

# Kiểm tra xem Ollama đã được cài đặt hay chưa
if ! command -v ollama &> /dev/null
then
    echo "Ollama chưa được cài đặt. Đang tiến hành cài đặt..."
    # Lệnh cài đặt Ollama (thay đổi theo hệ điều hành của bạn)
    # Ví dụ: cài đặt trên macOS bằng Homebrew
    # brew install ollama
    if [ $? -ne 0 ]; then
        echo "Cài đặt Ollama thất bại."
        pause_on_error
    fi
else
    echo "Ollama đã được cài đặt."
fi

# Kiểm tra xem mô hình qwen2:0.5b đã được tải hay chưa
if ! ollama list | grep -q "qwen2:0.5b"
then
    echo "Mô hình qwen2:0.5b chưa được tải. Đang tiến hành tải..."
    ollama download qwen2:0.5b
    if [ $? -ne 0 ]; then
        echo "Tải mô hình qwen2:0.5b thất bại."
        pause_on_error
    fi
else
    echo "Mô hình qwen2:0.5b đã được tải."
fi

# Đường dẫn tới file JAR
JAR_PATH="D:/intellji/ettshop/Truong/eTTShop/backend/build/libs/demo-0.0.1-SNAPSHOT.jar"
# Đường dẫn tới thư mục chứa tệp gradlew
GRADLEW_DIR="D:/intellji/ettshop/Truong/eTTShop/backend"

# Kiểm tra xem file JAR đã tồn tại hay chưa
if [ ! -f "$JAR_PATH" ]; then
    echo "File JAR không tồn tại. Đang tiến hành build..."
    (cd "$GRADLEW_DIR" && ./gradlew clean build)
    if [ ! -f "$JAR_PATH" ]; then
        echo "Build failed. File JAR không tồn tại sau khi build."
        pause_on_error
        exit 1
    fi
else
    echo "File JAR đã tồn tại."
fi

# Chạy ứng dụng Spring Boot
java -jar "$JAR_PATH"
if [ $? -ne 0 ]; then
    echo "Chạy ứng dụng Spring Boot thất bại."
    pause_on_error
fi
